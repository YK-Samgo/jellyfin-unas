#!/bin/bash


work_dir=`pwd`
jellyfin_dir=jellyfin-unas
deb_name=jellyfin-unas.deb

generate_md5() {
	cd $jellyfin_dir
	find unas/ -type f | xargs md5sum > DEBIAN/control/md5sums
	cd $work_dir
}

generate_md5
dpkg -b jellyfin-unas jellyfin-unas.deb
