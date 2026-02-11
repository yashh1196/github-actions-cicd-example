pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'rmdir /s /q node_modules || exit 0'
                bat 'del package-lock.json || exit 0'
                bat 'npm cache clean --force'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npx jest'
            }
        }
    }
}
