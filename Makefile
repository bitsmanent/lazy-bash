PREFIX = /usr/local

install:
	@echo installing executable file to ${DESTDIR}${PREFIX}/bin
	@mkdir -p ${DESTDIR}${PREFIX}/bin
	@cp -f lazy ${DESTDIR}${PREFIX}/bin
	@chmod 755 ${DESTDIR}${PREFIX}/bin/lazy
	@echo installing application file to ${DESTDIR}${PREFIX}/etc
	@mkdir -p ${DESTDIR}${PREFIX}/etc/lazy
	@cp -rf app ${DESTDIR}${PREFIX}/etc/lazy
	@chmod -R 755 ${DESTDIR}${PREFIX}/etc/lazy

uninstall:
	@echo removing executable file from ${DESTDIR}${PREFIX}/bin
	@rm -f ${DESTDIR}${PREFIX}/bin/lazy
	@echo removing application file from ${DESTDIR}${PREFIX}/etc
	@rm -rf ${DESTDIR}${PREFIX}/etc/lazy
