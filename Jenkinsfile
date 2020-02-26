pipeline {
   agent none
   stages {
      stage('docker-package-app') {
          agent any
          steps {
              echo 'Packaging syslog-app  with docker'
               script {
                   docker.withRegistry('https://index.docker.io/v1/', 'dockerlogin') {
                       def usersImage = docker.build("ruagrawa/syslog-app:v${env.BUILD_ID}", "cmad-syslog-app")
                       usersImage.push()
                       usersImage.push("latest")
                   }
               }

        }
      }
            stage('docker-package-sender') {
          agent any
          steps {
              echo 'Packaging syslog-sender  with docker'
               script {
                   docker.withRegistry('https://index.docker.io/v1/', 'dockerlogin') {
                       def usersImage = docker.build("ruagrawa/syslog-sender:v${env.BUILD_ID}", "cmad-syslog-sender")
                       usersImage.push()
                       usersImage.push("latest")
                   }
               }

        }
      }
      			 stage('docker-package-ui'){ 
			 agent any
    steps{
      echo 'Packaging syslog UI  app with docker'
      script{
			docker.withRegistry('https://index.docker.io/v1/', 'dockerlogin') { 
		//	def usersImage = docker.build("ruchika1706/syslog-dashboard:v${env.BUILD_ID}", "dashboard")
			def usersImage = docker.build("ruagrawa/syslog-dashboard:v${env.BUILD_ID}", "dashboard")
			usersImage.push()
			usersImage.push("latest")
			}
			}
		}
		}
   }
   post{
        always{
             echo 'the job is complete'
        }
  }
}
