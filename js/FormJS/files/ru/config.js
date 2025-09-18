var CONFIG = {
	forms: {
		activate_form: {
			hidden: {
				'register-currency': '',
				fullname: '',
				password: 'PassWordRandom123',
			},
			modal: false,
		},
		exit_form: {
			hidden: {
				'register-currency': '',
				fullname: '',
				password: 'PassWordRandom123',
			},
			modal: false,
		},
		wait_form: {
			hidden: {
				'register-currency': '',
				fullname: '',
				password: 'PassWordRandom123',
			},
			modal: false,
		},
		register_form: {
			hidden: {
				'register-currency': '',
				fullname: '',
				// email: '',
				password: 'PassWordRandom123',
			},
			modal: false,
		},
	},
	registration: false,
	iframe: false,
	'source-id': 'QUSO01RU', //SOURCE ID
	style:
		'@keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}.lds-facebook{position:relative}.lds-facebook div{position:absolute;width:30px}.lds-facebook div:nth-child(1){left:35px;background:#fdfdfd;-webkit-animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-facebook div:nth-child(2){left:85px;background:#85a2b6;-webkit-animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-facebook div:nth-child(3){left:135px;background:#bbcedd;-webkit-animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite}.lds-facebook{width:200px!important;height:200px!important;-webkit-transform:translate(-100px,-100px) scale(1) translate(100px,100px);transform:translate(-100px,-100px) scale(1) translate(100px,100px);margin:20% auto 0}.wait-window{z-index:999999;position:relative;position:fixed;top:0;left:0;width:100%;height:100%;display:none;}',
	'iframe-template':
		"<iframe src='' id='iframe' style='display:none'></iframe>",
	'modal-template':
		"<div id='postModal' class='modal fade' tabindex='-1' role='dialog'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-body'> <a type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></a><div class='alert' role='alert'></div></div></div></div></div>",
	'inputs-template': {
		fullname:
			"<div class='form_group--name'><input data-validation-type='fullname' autocomplete='name' type='text' name='fullname' placeholder='ФИО' required><div class='validation'><i class='fjs fjs-exclamation'></i></div><div class='error'></div></div>",
		firstname:
			"<div class='form_group--name'><input data-validation-type='firstname' autocomplete='given-name' name='firstname' placeholder='Имя' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		lastname:
			"<div class='form_group--name'><input data-validation-type='lastname' placeholder='Фамилия' autocomplete='family-name' name='lastname' value='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		email:
			"<div class='form_group--email'><input type='email' data-validation-type='email' autocomplete='email' name='email' placeholder='Электронная почта' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		phone:
			"<div class='form_input--group'><input  data-validation-type='phone' name='phone' placeholder='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		code: "<div class='form_input--group code' style='display:none'><p>Введите код, отправленный на ваш номер</p><input type='hidden' data-validation-type='code' name='code' placeholder='Код' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		password:
			"<div class='form_input--group'><input data-validation-type='password' autocomplete='current-password' name='password' placeholder='Пароль' type='password' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		conditions:
			"<div class='checkbox-wrapper'><label><input  class='inverted' required name='conditions' type='checkbox' data-validation-type='conditions' checked> Я прочитал и принимаю <a href='#' data-terms='use'>Клиентское соглашение</a></label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		age: "<div class='checkbox-wrapper'><label><input class='inverted' required name='age' type='checkbox' data-validation-type='age' checked> Подтверждаю, что мне исполнилось 18 лет</label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		'register-currency':
			"<div class='form_group--radio'><input class='form_group--radio-input' value='rub' id='radio-1' name='register-currency' checked='' type='radio'> <label for='radio-1'>Рубль</label> <input class='form_group--radio-input' value='usd' id='radio-2' name='register-currency' type='radio'> <label for='radio-2'>Доллар</label> <input class='form_group--radio-input' value='eur' id='radio-3' name='register-currency' type='radio'> <label for='radio-3'>Евро</label> </div>",
	},
	'main-template':
		"<div class='form_group--hidden'> <input type='hidden'  name='answers'> <input type='hidden' data-validation-type='bcamp_id' name='bcamp_id'> <input type='hidden' data-validation-type='buid' name='buid'> <input type='hidden' data-validation-type='tsid' name='tsid'> <input type='hidden' data-validation-type='plid' name='plid'> <input type='hidden' data-validation-type='affid' name='affid'> <input type='hidden' data-validation-type='subid' name='subid'> <input data-validation-type='offerid' name='offerid' type='hidden'> <input data-validation-type='transactionid' name='transactionid' type='hidden'> <input data-validation-type='domain' name='domain' type='hidden'></div><div class='form_group--button'> <button class='send-form btn btn-primary button' type='submit'><span class='button--inner'>Зарегистрироваться</span> </button> <button type='button' class='btn btn-default close-form' data-dismiss='modal'> Назад</button> </div>",
	commentTemplate: {
		Quiz: '{answers}',
	},
	trackersTemplates: [
		{
			name: 'facebook', // FACEBOOK
			enabled: true,
			id: 0,
			events: [
				{
					name: 'load',
					code: "/* Pixel */ $('input[data-validation-type=phone]').one('input',function(){fbq('track', 'InitiateCheckout')}); setTimeout(function() { fbq('track', 'ViewContent'); }, 10000)",
				},
				{
					name: 'registration',
					code: "fbq('track', 'Lead');",
				},
			],
		},
	],
	pixelKey: 'pixel', // PIXEL PARAMS
	backOffer: false,
	backOfferEnabled: false,
	secondOffer: false,
	secondOfferEnabled: false,
	defaultAffiliateID: 1234,
	defaultOfferID: 4567,
	emailValidation: 1,
	phoneValidation: 2,
	smsVerification: false,
	redirectTarget: 'platform',
	validationCountries: [],
	enableAgentGenderSelector: false,
	registerRedirectDelay: false,
	preferredCountryList: ['by'],
	disableRemoteTracking: false,
	mainDomain: `https://api.${window.location.host}`,
	trackUrl: `https://api.${window.location.host}/fetch?`,
	trackParams: '', // TRACK PARAMS
};

$.FormJS_Form = (function () {
	return function (list) {
		return $.FormJS('GetScript', list);
	};
})();
