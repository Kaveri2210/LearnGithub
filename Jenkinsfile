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
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

    }

    post {

        always {
emailext body: 'test body', subject: 'Pipeline status', to: 'kaveri.gavhane.21@gmail.com'
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**', fingerprint: true

            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])

        }

        success {
            echo 'Tests Passed'
        }

        failure {
            echo 'Tests Failed'
        }
    }
}
