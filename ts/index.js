function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greeter({
    firstName: '冯',
    lastName: '二通'
});
