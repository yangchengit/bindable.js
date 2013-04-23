all:
	coffee -o lib -c src	

watch: 
	coffee -o lib -cw src

clean:
	rm -rf lib

web-tests:
	rm -rf test-web;
	cp -r test test-web;
	for F in `ls test-web`; do ./node_modules/.bin/sardines "test-web/$$F" -o "test-web/$$F" -p browser; done






