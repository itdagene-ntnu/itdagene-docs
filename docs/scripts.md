---
id: scripts
title: Cool scripts
sidebar_label: Cool scripts
---

# Awesome scripts

## Download all the company logos

```bash
$ curl -s 'https://itdagene.no/graphql'  -H 'content-type: application/json' --data '{"query":"{c:currentMetaData {a:companiesLastDay{logo} b:companiesFirstDay {logo}}}","variables":null,"operationName":null}'  | jq -r ".data.c | (.a + .b)| .[] |.logo"  | sort -u  | parallel -N5 wget
```

## Get all the names

```bash
$ curl -s 'https://itdagene.no/graphql' -H 'content-type: application/json' --data '{"query":"{c:currentMetaData {a:companiesLastDay{name} b:companiesFirstDay {name}}}","variables":null,"operationName":null}' | jq -r ".data.c | (.a + .b)| .[] |.name" | sort -u
```

## Generate vouchers

`drikkebong_mal.pdf` and `font.ttf` can be found on the server. Just SSH in to find them.

```bash
time curl -s 'https://itdagene.no/graphql'  -H 'content-type: application/json' --data '{"query":"{c:currentMetaData {a:companiesLastDay{name} b:companiesFirstDay {name}}}","variables":null,"operationName":null}'  | time jq ".data.c | (.a + .b)| .[] |.name" | time sort -u | time xargs ./main drikkebong_mal.pdf
```
