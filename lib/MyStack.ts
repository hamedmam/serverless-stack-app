import * as sst from '@serverless-stack/resources'
import * as sfn from '@aws-cdk/aws-stepfunctions'
import * as tasks from '@aws-cdk/aws-stepfunctions-tasks'
import * as cdk from '@aws-cdk/core'
import { TableFieldType } from '@serverless-stack/resources'

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props)

    const myTable = new sst.Table(this, 'MyTable', {
      primaryIndex: { partitionKey: 'RequestId' },
      fields: {
        RequestId: TableFieldType.STRING,
      },
    })

    const submitLambda = new sst.Function(this, 'SubmitLambda', {
      runtime: 'nodejs12.x',
      handler: 'src/lambda.handler',
    })

    const getStatusLambda = new sst.Function(this, 'StatusLambda', {
      runtime: 'nodejs12.x',
      handler: 'src/get-status.handler',
    })

    // const submitLambda = new sst.Function(this, 'SubmitLambda', {

    // })
    // const getStatusLambda = new sst.Function(this, 'CheckLambda', {})

    // const submitJob = new tasks.LambdaInvoke(this, 'Submit Job', {
    //   lambdaFunction: submitLambda,
    //   // Lambda's result is in the attribute `Payload`
    //   outputPath: '$.Payload',
    // })

    // const waitX = new sfn.Wait(this, 'Wait X Seconds', {
    //   time: sfn.WaitTime.secondsPath('$.waitSeconds'),
    // })

    // const getStatus = new tasks.LambdaInvoke(this, 'Get Job Status', {
    //   lambdaFunction: getStatusLambda,
    //   // Pass just the field named "guid" into the Lambda, put the
    //   // Lambda's result in a field called "status" in the response
    //   inputPath: '$.guid',
    //   outputPath: '$.Payload',
    // })

    // const jobFailed = new sfn.Fail(this, 'Job Failed', {
    //   cause: 'AWS Batch Job Failed',
    //   error: 'DescribeJob returned FAILED',
    // })

    // const finalStatus = new tasks.LambdaInvoke(this, 'Get Final Job Status', {
    //   lambdaFunction: getStatusLambda,
    //   // Use "guid" field as input
    //   inputPath: '$.guid',
    //   outputPath: '$.Payload',
    // })

    // const definition = submitJob
    //   .next(waitX)
    //   .next(getStatus)
    //   .next(
    //     new sfn.Choice(this, 'Job Complete?')
    //       // Look at the "status" field
    //       .when(sfn.Condition.stringEquals('$.status', 'FAILED'), jobFailed)
    //       .when(
    //         sfn.Condition.stringEquals('$.status', 'SUCCEEDED'),
    //         finalStatus
    //       )
    //       .otherwise(waitX)
    //   )

    // new sfn.StateMachine(this, 'StateMachine', {
    //   definition,
    //   timeout: cdk.Duration.minutes(5),
    // })
  }
}
