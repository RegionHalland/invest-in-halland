APPDIR=$(realpath $(dirname $(dirname $0)))
TMPDIR=$(mktemp -d)
cd $APPDIR
for line in $*; do
  filepath=$(realpath $line)
  file=${filepath/$APPDIR\//}
  mkdir -p $TMPDIR/$(dirname $file)
  cp $APPDIR/$file $TMPDIR/$file
done
message=$(find $TMPDIR -type f | xargs node_modules/.bin/html-beautify -r | grep -v unchanged || true)
if [[ $message ]]; then
  echo "$message" | sed "s#$TMPDIR##g" | sed "s#\.\.\/##g"
  rm -rf $TMPDIR
  exit 1
fi
rm -rf $TMPDIR