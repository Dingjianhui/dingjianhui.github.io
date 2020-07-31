/* global algoliasearch instantsearch */

const searchClient = algoliasearch('TKPNCDWVXO', '137b480446d5bc06c60764fc7af48ca1');

const search = instantsearch({
    indexName: 'blog-dingjianhui.top',
    searchClient,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "categories" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "tags" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}</p>
</article>
`,
        },
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
]);

search.start();
