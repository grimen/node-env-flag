
all: test

.PHONY: install-ci
install-ci:
	yarn install

.PHONY: test
test:
	yarn run test

.PHONY: test-ci
test-ci:
	yarn run test-ci

.PHONY: test-dev
test-dev:
	yarn run test-dev

.PHONY: validate
validate:
	yarn run validate

.PHONY: release
release:
	yarn publish --access public

.PHONY: coverage
coverage:
	yarn run coverage
