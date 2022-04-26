pipeline {
    agent none

    stages {
        stage('C Sharp Code') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:6.0' }
            }
            environment {
                DOTNET_CLI_HOME = "/tmp/dotnet_cli_home"
            }
            steps {
                sh "dotnet build"
                sh "dotnet test"
            }
        }
        stage('Typescript Code') {
            agent {
                docker { image 'node:17-bullseye' }
            }
            steps {
                dir("DotnetTemplate.Web") {
                    sh "npm ci"
                    sh "npm run build"
                    sh "npm run test-with-coverage"              
                    sh "npm run lint"
                }
                publishCoverage adapters: [istanbulCoberturaAdapter(path: 'DotnetTemplate.Web/coverage/cobertura-coverage.xml', thresholds: [[failUnhealthy: true, thresholdTarget: 'Aggregated Report', unhealthyThreshold: 90.0, unstableThreshold: 95.0]])], sourceFileResolver: sourceFiles('NEVER_STORE')
            }
        }
    }
}
