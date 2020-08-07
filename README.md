# CDK project for d-icebreaker-ng

This IaC project is used to deploy the AWS infrastructure for [DIcebreakerNg](https://github.com/TonySatura/d-icebreaker-ng)

## Deployment

- compile TypeScript:
  
      `$ npm run build`

  - Deploy web application infrastructure and CodePipeline

      ```bash
      $ cdk deploy *-ui -c branch=master
      $ cdk deploy *-pipeline -c branch=master
      ```

  - Output:
      - siteURL = https://[...].cloudfront.net

  - Wait until the pipeline deployed the Angular project to the bucket for the first time
  
  - Visit the siteURL to test the web application