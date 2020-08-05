#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DIcebreakerCdkStack } from '../lib/d-icebreaker-cdk-stack';

const app = new cdk.App();
new DIcebreakerCdkStack(app, 'DIcebreakerCdkStack');
