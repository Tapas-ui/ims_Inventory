node{
  stage('SCM checkout'){
     git 'https://github.com/Tapas-ui/ims_Inventory' 
  }
  stage ('Compile-package'){
    def mvnPath =tool name: 'Default', type: 'git'
   sh "$(mvnPath)/bin/mvn package"
  }
 
}
