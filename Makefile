PATH:=node_modules/.bin:$(PATH)
PACKAGE_NAME=$(shell node -p "require('./package.json').name" 2>/dev/null)
BAFLAGS=--source-maps true
BRFLAGS=-p bundle-collapser/plugin \
	-s $(PACKAGE_NAME) \
	-d
JFLAGS=--coverage
DIST=dist
SRC=src
COVERAGE=coverage
REPORTS=test-reports

all: node_modules/ test build
babel: | scrub dist/
	@babel $(BAFLAGS) -d $(DIST) $(SRC);
browserify: | scrub dist/
	@browserify $(BRFLAGS) \
		$(SRC)/index.js \
		| derequire > $(DIST)/$(PACKAGE_NAME).js;
build: babel browserify
clean:
	@rm -rf $(COVERAGE) $(REPORTS);
scrub:
	@rm -rf $(DIST);
dist/:
	@mkdir -p $(DIST);
jest: | clean $(REPORTS)
	@jest -c .jestrc $(JFLAGS);
$(REPORTS):
	@mkdir -p $(REPORTS);
lint: standard
node_modules/: npm
npm:
	@npm i;
standard:
	@standard;
test: lint jest

.PHONY: all \
	babel \
	browserify \
	build \
	clean \
	jest \
	lint \
	npm \
	scrub \
	standard \
	test
