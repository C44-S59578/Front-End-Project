var quiz = { "JS" : [
    {
        "id" : 1,
        "question" : "What is the sum of 5 and 3?",
        "options" : [
            {"a": "7", 
             "b":"8", 
             "c":"9", 
             "d":"10"}
            ],
        "answer":"8",
        "score":0,
        "status": ""
    },
    {
        "id" : 2,
        "question" : "If you have 10 apples and eat 2, how many apples do you have left?",
        "options" : [
            {"a": "8", 
             "b":"12", 
             "c":"2"}
            ],
        "answer":"8",
        "score":0,
        "status": ""
    },
    {
        "id" : 3,
        "question" : "Mike has 3 balloons and his friend gives him 2 more. How many balloons does Mike have now?",
        "options" : [
            {"a": "4", 
             "b":"5", 
             "c":"6"}
            ],
        "answer":"5",
        "score":0,
        "status": ""
    },
    {
        "id" : 4,
        "question" : "What is 6 multiplied by 3?",
        "options" : [
            {"a": "9", 
             "b":"18", 
             "c":"12"}
            ],
        "answer":"18",
        "score":0,
        "status": ""
    },
    {
        "id" : 5,
        "question" : "There are 20 birds on a tree. 5 fly away. How many birds are left on the tree?",
        "options" : [
            {"a": "15", 
             "b":"16", 
             "c":"14", 
             "d":"17"}
            ],
        "answer":"15",
        "score":0,
        "status": ""
    },
    {
        "id" : 6,
        "question" : "Which number comes next in the series: 2, 4, 6, 8, ...?",
        "options" : [
            {"a": "9", 
             "b":"10", 
             "c":"11"}
            ],
        "answer":"10",
        "score":0,
        "status": ""
    },
    {
        "id" : 7,
        "question" : "Samantha has 8 candies and she gives 3 to her friend. How many candies does she have left?",
        "options" : [
            {"a": "4", 
             "b":"5", 
             "c":"6"}
            ],
        "answer":"5",
        "score":0,
        "status": ""
    },
    {
        "id" : 8,
        "question" : "What is the total when you add 7, 5 and 9 together?",
        "options" : [
            {"a": "20", 
             "b":"21", 
             "c":"22", 
             "d":"23"}
            ],
        "answer":"21",
        "score":0,
        "status": ""
    },
    {
        "id" : 9,
        "question" : "A book has 12 pages. How many pages are there in 3 such books?",
        "options" : [
            {"a": "36", 
             "b":"24", 
             "c":"32"}
            ],
        "answer":"36",
        "score":0,
        "status": ""
    },
    {
        "id" : 10,
        "question" : "There are 4 pencils in one box. How many pencils are there in 6 boxes?",
        "options" : [
            {"a": "22", 
             "b":"24", 
             "c":"20"}
            ],
        "answer":"24",
        "score":0,
        "status": ""
    }

    ]
}




var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



