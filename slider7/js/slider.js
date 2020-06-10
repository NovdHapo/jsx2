function Slider() {
	this.imagesUrls = [];
	this.currentImageIndex = 0;
	this.showPrevBtn = null;
	this.showNextBtn = null;
	this.slideImage = null; 
	this.start = function (elId) {
				var that = this;

				var elSelector = '#' + elId;
				var el = document.querySelector(elSelector);

				this.showPrevBtn = el.querySelector(".show-prev-btn");
				this.showNextBtn = el.querySelector(".show-next-btn");
				this.slideImage = el.querySelector(".slide-img");

				//subscribe to events
				this.showPrevBtn.addEventListener('click', function(e) {
					that.onShowPrevBtnClick(e);
				});
				this.showNextBtn.addEventListener('click', function(e) {
					that.onShowNextBtnClick(e);
				});

				//create images array
				this.imagesUrls.push('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FhrwaKvfiiwM%2Fmaxresdefault.jpg&f=1&nofb=1');
				this.imagesUrls.push('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEONVXpMvAmc%2Fmaxresdefault.jpg&f=1&nofb=1');
				this.imagesUrls.push('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FddcU4iaroq0%2Fmaxresdefault.jpg&f=1&nofb=1');
				this.imagesUrls.push('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.94opXCR0glLUCEjwmS9BOwHaEd%26pid%3DApi&f=1');


				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showPrevBtn.disabled = true;
			};

			this.onShowPrevBtnClick = function(e) {
				this.currentImageIndex--;
				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showNextBtn.disabled = false;

				//disable prev button if need
				if(this.currentImageIndex === 0 ){
					this.showPrevBtn.disabled = true;
				}
			};

			this.onShowNextBtnClick = function(e) {
				this.currentImageIndex++;
				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showPrevBtn.disabled = false;

				//disable next button if need
				if(this.currentImageIndex === (this.imagesUrls.length - 1 ) ){
					this.showNextBtn.disabled = true;
				}
			};
}

