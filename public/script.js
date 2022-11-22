const button = document.querySelector("button")
button.addEventListener("click", () => {
    fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {id: 1, quantity: 5},
            {id: 2, quantity: 3},
            {id: 3, quantity: 2},
            {id: 4, quantity: 2},
          ],
        }),
      })
        .then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
          window.location = url
        })
        .catch(e => {
          console.error(e.error)
        })
})