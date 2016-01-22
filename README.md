# Palmetto Flow Service Container

A container to hold and register palmetto flow services:

Each service should be a npm module that takes the following signature:

```
module.exports = function (ee) {

}
```

ee is the eventemitter that is passed in for the appropriate adapter.

Then in this project there is a `services.json` file, simply open this file
and provide the name of your service or npm module, the adapter you plan to connect
to and the pub/sub connection information:

```
{
  "name": "module name here",
  "adapter": "adapter name here",
  "config": "user provided service config here"
}
```

Once completed, run npm test to confirm your changes in the schedule json is correct
and then commit the repository.  Strider will pick it up and deploy it to develop
and will automatically register your service.  At this point the service is listening
and you can start to interact with it.
