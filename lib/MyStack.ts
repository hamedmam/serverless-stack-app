import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const apiOne = new sst.Api(this, "ApiOne", {
      routes: {
        "GET /": "src/lambda-one.handler",
      },
    });

    const apiTwo = new sst.Api(this, "ApiTwo", {
      routes: {
        "GET /": "src/lambda-two.handler",
      },
    });

    const apiThree = new sst.Api(this, "ApiThree", {
      routes: {
        "GET /": "src/lambda-three.handler",
      },
    });

    const apiFour = new sst.Api(this, "ApiFour", {
      routes: {
        "GET /": "src/lambda-four.handler",
      },
    });

    const apiFive = new sst.Api(this, "ApiFive", {
      routes: {
        "GET /": "src/lambda-five.handler",
      },
    });

    const apiSix = new sst.Api(this, "ApiSix", {
      routes: {
        "GET /": "src/lambda-six.handler",
      },
    });

    const apiSeven = new sst.Api(this, "ApiSeven", {
      routes: {
        "GET /": "src/lambda-seven.handler",
      },
    });

    const apiEight = new sst.Api(this, "ApiEight", {
      routes: {
        "GET /": "src/lambda-eight.handler",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": apiOne.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiTwo.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiThree.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiFour.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiFive.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiSix.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiSeven.url,
    });
    this.addOutputs({
      "ApiEndpoint": apiEight.url,
    });
  }
}
