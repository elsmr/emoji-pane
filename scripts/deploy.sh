SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
GH_REF="github.com/eliasmeire/eliasmeire.github.io"
DIST_FOLDER="_site"

# enable error reporting to the console
set -e

REPO=`git config remote.origin.url`

# clean
rm -rf ../eliasmeire.github.io.${TARGET_BRANCH}

# make new folder for generated files
mkdir ../eliasmeire.github.io.${TARGET_BRANCH}

# clone into target folder
git clone $REPO ../eliasmeire.github.io.${TARGET_BRANCH}

# go to target folder
cd ../eliasmeire.github.io.${TARGET_BRANCH}

# go to target branch
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

# go back to original folder
cd ../eliasmeire.github.io

# build site, stored in dist folder
gulp build

# copy dist folder to target folder
cp -R ${DIST_FOLDER}/* ../eliasmeire.github.io.${TARGET_BRANCH}

# go to target folder
cd ../eliasmeire.github.io.${TARGET_BRANCH}

# git configuration
git config user.email "eliasmbot@gmail.com"
git config user.name "Eliasbot"

# add files
git add -A .

# If there are no changes to the compiled _site (e.g. this is a README update) then just bail.
if [ -z `git diff --cached --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# commit files
git commit -am "Build from ${SOURCE_BRANCH} branch | Deployed by TravisCI (Build #$TRAVIS_BUILD_NUMBER)"

# force push to github
git push -f "https://${GH_TOKEN}@${GH_REF}" ${TARGET_BRANCH} > /dev/null 2>&1
