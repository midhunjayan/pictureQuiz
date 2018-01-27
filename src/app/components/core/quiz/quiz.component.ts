import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { sections } from '../../shared/data/sections';

import { ImageComponent } from '../../shared/image/image.component';
import { AudioComponent } from '../../shared/audio/audio.component';

import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['quiz.component.scss'],
})

export class QuizComponent implements OnInit {

    public quizTitle: string;
    public currentQuestionNumber: number;
    public allQuestions: Array < object > ;
    public allData: object;
    public currentQuestion: object;
    public isRendered: boolean = false;
    public trainingId: number;
    public totalQuestion: number;

    constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {

    }

    ngOnInit() {
        this.trainingId = +this.route.snapshot.params.id;
        this.currentQuestionNumber = +this.route.snapshot.params.qId;
        sections.filter((s) => {
            if (s['id'] == this.trainingId)
                this.quizTitle = s['name'];
        });
        this.loadQuiz(this.trainingId);
    }

    public loadQuiz(id: number) {
        this.apiService.get(this.quizTitle + id + '.json').then((res) => {
            this.allData = JSON.parse(res._body)[0];
            this.isRendered = true;
            this.allQuestions = this.allData['questions'];
            this.currentQuestion = this.allQuestions[this.currentQuestionNumber - 1];
            this.totalQuestion = this.allQuestions.length;
        })
    }

    public selectAnswer(option: object) {
        if (option['isAnswer']) {
            swal({
                title: 'Correct!',
                text: 'Congratulations',
                imageUrl: '../../../assets/img/clapping.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            }).then((result: any) => {
                this.currentQuestionNumber++;
                this.currentQuestion = this.allQuestions[this.currentQuestionNumber - 1];
                if (this.currentQuestionNumber <= this.totalQuestion)
                    this.router.navigate(['quiz/', this.trainingId, this.currentQuestionNumber]);
                else {
                    swal(
                        'Congratulations',
                        'Round Completed!',
                        'success'
                    );
                    this.router.navigate(['home']);
                }
            });

        } else {
            swal({
                type: 'error',
                title: 'Sorry wrong answer',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
}