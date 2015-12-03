my website
---

Run nginx reverse proxy

```
docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
```

Build this image and run

```
docker build -t preston-io .
docker run -e VIRTUAL_HOST=preston.io,www.preston.io -p 3000:3000 --rm --name preston-io-server preston-io
```

