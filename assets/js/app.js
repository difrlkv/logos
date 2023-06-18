/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\r\n  \r\n    let products_amount = 0;\r\n\r\n    $('.product-options').on('click', function(e) {\r\n        e.preventDefault();\r\n    })\r\n    \r\n    $('.minus-button').on('click', function(e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        var $this = $(this);\r\n        var $input = $this.closest('div').find('input');\r\n        var value = parseInt($input.val());\r\n     \r\n        if (value !== 0) {\r\n            value = value - 1;\r\n\r\n            $input.val(value);\r\n            products_amount -= 1;\r\n            renderProductsAmount();\r\n        }\r\n    });\r\n\r\n\r\n    function renderProductsAmount() {\r\n        $(\"#products-amount\").text( products_amount );\r\n    }\r\n\r\n    $('.add-button').on('click', function(e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        var $this = $(this);\r\n        var $input = $this.closest('div').find('input');\r\n        var value = parseInt($input.val());\r\n\r\n        if (value < 10 ) {\r\n            value = value + 1;\r\n\r\n            $input.val(value);\r\n            products_amount += 1;\r\n            renderProductsAmount();\r\n        }\r\n    });\r\n\r\n    $('.btn-basket').on('click', function(e) {\r\n\r\n        const products_amount = $(\"#products-amount\").text().trim();\r\n        if ( products_amount !== \"0\" ) return true;\r\n\r\n        e.preventDefault();\r\n        $('.modal-fade').addClass('show');\r\n    });\r\n\r\n    $('.modal-fade').on('click', '.close', function() {\r\n        const modal = $(this).parents('.modal-fade');\r\n        modal.removeClass('show');\r\n        clearModalInputs( modal );\r\n    });\r\n    \r\n\r\n    $(\".term-items\").on(\"click\", \".term-items-head\", function(e){\r\n        $(this).parent().toggleClass(\"show\");\r\n\r\n    });\r\n    \r\n\r\n    $(\".options\").on(\"click\", \".order-select\", function(event){\r\n        event.preventDefault();\r\n        $(this).parent().find(\".order-select\").removeClass(\"active\");\r\n        $(this).addClass('active');\r\n\r\n    });\r\n\r\n    $(\".options\").on(\"click\", \".order-select\", function(event){\r\n        \r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n    \r\n        // 1111\r\n        $('.order-delivery-type-1, .order-delivery-type-2').hide();\r\n        \r\n        $('#Cont'+$(this).attr('data-value')).show();\r\n        \r\n        $(this).attr('disabled',true).siblings().attr('disabled',false);\r\n        console.log( $(this).attr('data-value') );\r\n\r\n    });\r\n});\r\n\r\nconst basket_data = [\r\n    {\r\n        id: 1,\r\n        cost: 200,\r\n        amount: 1,\r\n        title: \"Product 1\"\r\n    },\r\n\r\n    {\r\n        id: 2,\r\n        cost: 150,\r\n        amount: 3,\r\n        title: \"Product 2\"\r\n    }\r\n]\r\n\r\nconst product = {\r\n    id: 3,\r\n    const: 120,\r\n    amount: 5,\r\n    title: \"Product 3\"\r\n}\r\n\r\nconst Cart = {\r\n\r\n    getStoredProductsCostAndAmount() {\r\n\r\n        const stored = this.getStoredProducts();\r\n        let total_cost = 0, amount = 0; \r\n\r\n        stored.forEach( product => {\r\n            total_cost += product.cost * product.amount;\r\n            amount += product.amount;\r\n        });\r\n\r\n        return { amount: amount, total_cost: total_cost };\r\n    },\r\n\r\n    setProductsToStorage( products ) {\r\n        const json_products = JSON.stringify( products );\r\n        localStorage.setItem( \"cart\", json_products );\r\n    },\r\n\r\n    getStoredProducts() {\r\n        const stored = localStorage.getItem( \"cart\" );\r\n        if ( stored ) {\r\n            return JSON.parse( stored );\r\n        } else return [];\r\n    },\r\n\r\n    changeProductInCart( product ) {\r\n        \r\n        let stored = this.getStoredProducts();\r\n        const already_added_product = stored.find( p => p.id === product.id );\r\n\r\n        if ( already_added_product ) {\r\n\r\n            if ( product.amount === 0 ) {\r\n                stored = stored.filter( p => p.id !== product.id );\r\n            } else {\r\n\r\n                let final_amount = product.amount;\r\n                if ( final_amount > 50 ) final_amount = 50;\r\n                \r\n                already_added_product.amount = final_amount;         \r\n            }\r\n\r\n        } else {\r\n            stored.push( product );\r\n        }\r\n\r\n        this.setProductsToStorage( stored );\r\n    }\r\n\r\n   \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });