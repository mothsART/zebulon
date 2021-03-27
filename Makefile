.PHONY: build.debian build.debian.source deploy.debian clean

build.debian:
	debuild #binary package : .deb, alias of dpkg-buildpackage -rfakeroot -d -us -uc

build.debian.source:
	debuild -S #source package : alias of dpkg-buildpackage -rfakeroot -d -us -uc -S

deploy.debian:
	make build.debian.source
	dput ppa:jerem-ferry/games `/bin/ls -d ../zebulon*.changes`

clean:
	rm -f MANIFEST
	rm -rf build dist
	git clean -xdf # dry run : git clean -xdn
