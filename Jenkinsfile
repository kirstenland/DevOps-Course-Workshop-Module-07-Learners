pipeline {
    agent none

    stages {
        stage('C Sharp Code') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:6.0' }
            }
            steps {
                echo 'C Sharp...'
            }
        }
        stage('Typescript Code') {
            agent {
                docker { image 'node:17-bullseye' }
            }
            steps {
                echo 'Typescript..'
            }
        }
    }
}
