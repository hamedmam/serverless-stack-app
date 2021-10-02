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
      "ApiEndpointOne": apiOne.url,
    });
    this.addOutputs({
      "ApiEndpointTwo": apiTwo.url,
    });
    this.addOutputs({
      "ApiEndpointThree": apiThree.url,
    });
    this.addOutputs({
      "ApiEndpointFour": apiFour.url,
    });
    this.addOutputs({
      "ApiEndpointFive": apiFive.url,
    });
    this.addOutputs({
      "ApiEndpointSix": apiSix.url,
    });
    this.addOutputs({
      "ApiEndpointSeven": apiSeven.url,
    });
    this.addOutputs({
      "ApiEndpointEight": apiEight.url,
    });
  }
}
