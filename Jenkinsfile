pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npm run allure-generate'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }
    }
}
