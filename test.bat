@echo test base endpoint (/user)
curl http://localhost:10080/user
@echo test end-point which calls back into /user via server.dev.local
curl http://localhost:10080/fails
@echo test by direct ip
curl http://localhost:10080/by-ip
@echo test via host server.dev.local with node inbuilt http
curl http://localhost:10080/by-http
