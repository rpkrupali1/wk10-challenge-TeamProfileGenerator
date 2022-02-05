const inquirer = require('inquirer');
class ProfileGenerator {
    constructor() {};

    getTeamMemberInfo(){
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required) ',
            validate: name => name ? true : false
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your valid email (Required)',
            validate: email => email ? true : false
          },
          {
              type: 'list',
              name: 'role',
              message: 'Please select your role (Required)',
              choices:  ['Manager', 'Engineer', 'Intern']
          },
          {
              type: 'confirm',
              name: 'confirmAddTeamMember',
              message: 'Would you like to add another team member?',
              default: false
          }
        ])
        .then(teamMemberData => {
            if(teamMemberData.confirmAddTeamMember)
                return this.getTeamMemberInfo();
        })        
    }
}

module.exports = ProfileGenerator;