function wait() {
    send("waiting").then(action => {
        switch (action) {
            case "play":
                document.querySelector(".player_controller a.play").click();
                break;
            case "prev":
                document.querySelector(".player_controller a.prev").click();
                break;
            case "next":
                document.querySelector(".player_controller a.next").click();
                break;
        }
        wait();
    });
}


wait();