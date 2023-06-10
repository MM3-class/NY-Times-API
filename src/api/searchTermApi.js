import axios from "axios";

export default axios.create({
    baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
})

/* curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "simple_query_string": {
      "fields": [ "content" ],
      "query": "foo bar -baz"
    }
  }
}
'
 */