NODE_MODULES=node_modules
PATH:=$(NODE_MODULES)/.bin:$(PATH)
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

all: $(NODE_MODULES)/ test build
babel: | scrub $(DIST)/
	@babel $(BAFLAGS) -d $(DIST) $(SRC);
browserify: | scrub $(DIST)/
	@browserify $(BRFLAGS) \
		$(SRC)/index.js \
		| derequire > $(DIST)/$(PACKAGE_NAME).js;
build: babel browserify
clean:
	@rm -rf $(COVERAGE) $(REPORTS);
scrub:
	@rm -rf $(DIST);
$(DIST)/:
	@mkdir -p $(DIST);
jest: | clean $(REPORTS)/
	@jest -c .jestrc $(JFLAGS);
$(REPORTS)/:
	@mkdir -p $(REPORTS);
lint: standard
$(NODE_MODULES)/:
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
	scrub \
	standard \
	test
