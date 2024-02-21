function skillsMember() {
    var member = this;
    member.name = 'Member';
    member.skills = ['JavaScript', 'HTML', 'CSS', 'AngularJS', 'Node.js'];
    member.experience = 3;
    member.salary = 50000;
    member.role = 'Front-End Developer';
    member.location = 'San Francisco';
    member.work = function() {
        console.log('I am ' + member.name + ' and I am working!');
    }
}