function move(num) {
    let option = $('#towns option:selected');
    if (num === 1) {
        option.insertAfter(option.next());
    } else {
        option.insertBefore(option.prev());
    }
}