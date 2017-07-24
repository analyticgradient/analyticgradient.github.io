var quotes = [
  'import tensorflow as tf',
  'library(purrr) #more fp required',
  'the revolution will be supervised',
  'support vector machines!',
  'free variables!',
  'functions are first class citizens',
  'save the decision trees',
  'a partial application',
  'rbf kernel panic',
  'strictly convex',
  'minimum message length',
  'map reduce reuse recycle',
  'foldl $ at home',
  'ceci n\'est pas une %>%',
  'import numpy as np',
  'ultra-hyperparameter',
  'if a tree falls in a random forest...',
  'bag, boost, stack',
  'i know the first three numbers',
  'get all of the above in a limited amount of time'
]

function rollQuote() {
  var r = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quote_display').innerHTML = quotes[r]
}

rollQuote()
