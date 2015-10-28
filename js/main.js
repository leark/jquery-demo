/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$("button").click(function() {
	var control = this.id;
	console.log("button " + control + " was clicked");
	var selector = $("#selector").val();
	var newContent = $("#newContent").val();
	alert(selector + ": " + newContent);

	selector = "main " + selector;

	switch (control) {
		case "change-content":
			$(selector).text(newContent);
			break;
		case "add-at-end":
			$(selector).append($("<"+selector+">").text(newContent));
			break;
		case "add-at-start":
			$(selector).prepend($("<"+selector+">").text(newContent));
			break;
		case "insert-before":
			$(selector).before($("<"+selector+">").text(newContent));
			break;
		case "move-after":
			var detached = $(selector).detach();
			$("main " + newContent).append(detached);
			break;
		case "surround-class":
			surround(selector, newContent);
			break;
		case "hide-text":
			$(selector).each(function() {
				if ($(this).text().length > 12) {
					surround(selector, "hidden");
				}
			});
			break;
		case "remove-word":
			$(selector).each(function() {
				if ($(this).text().indexOf(newContent) >= 0) {
					$(this).remove();
				}
			});
			break;
	}

});

function surround(selector, newContent) {
	$(selector).wrap("<div class=" + newContent + "></div>");
};
