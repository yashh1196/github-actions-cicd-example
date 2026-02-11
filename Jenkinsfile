pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('System Info') {
            steps {
                bat 'node -v || echo Node not installed'
                bat 'npm -v || echo NPM not installed'
            }
        }

        stage('Create Build File') {
            steps {
                bat 'echo Build successful > build.txt'
            }
        }

        stage('Read Build File') {
            steps {
                bat 'type build.txt'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'build.txt'
            }
        }
    }
}
