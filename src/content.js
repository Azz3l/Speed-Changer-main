const interval = setInterval(() => {
    const header = document.querySelector("._1R3Un")
    if (header) {
        console.log(header)
        clearInterval(interval)


        const button = document.createElement("button")
        button.innerHTML = "1x"
        button.classList.add("twoTimesButton")

        button.addEventListener("click", () => {
            const audio = document.querySelectorAll("audio");
            if (button.innerHTML == "2x") {
                button.innerHTML = "1x"
            } else {
                button.innerHTML = "2x"
            }
            audio.forEach((audio) => {
                if (audio.playbackRate == 1) {
                    audio.playbackRate = 2;
                } else {
                    audio.playbackRate = 1;

                }
            })
        })

        header.appendChild(button)

    }
}, 1000)