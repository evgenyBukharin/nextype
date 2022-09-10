const lastTags = document.querySelectorAll(".card__tag-last");
const firstTags = document.querySelectorAll(".card__tag-first");
lastTags.forEach((tag) => {
	tag.addEventListener("focusout", () => {
		card = tag.closest(".card");
		card.querySelector(".card__fade").style.display = "unset";
		card.querySelector(".card__border").style.display = "unset";
		tag.closest(".card-bottom").classList.remove("card-bottom");
		setTimeout(() => {
			tag.parentNode.parentNode.parentNode.classList.add("card-bottom");
		}, 0);
	});
});
firstTags.forEach((tag) => {
	tag.addEventListener("focusin", () => {
		card = tag.closest(".card");
		card.querySelector(".card__fade").style.display = "none";
		card.querySelector(".card__border").style.display = "none";
	});
});
