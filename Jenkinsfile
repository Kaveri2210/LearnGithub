pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Playwright tests...'
                bat 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Publishing Allure Report...'
            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }
    }
}
