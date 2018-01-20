import { Component, OnInit } from '@angular/core'
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
    selector: 'new-courses',
    templateUrl: './news-courses.component.html',
    styleUrls: ['./news-courses.component.css']
})

export class NewCousesComponent implements OnInit {

    form: any;

    constructor(fb: FormBuilder) {
       this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }

    ngOnInit() {

    }
    get topics()
    {
        return this.form.get('topics') as FormArray;
    }

    addTopic(topic: HTMLInputElement) {
        this.topics.push(new FormControl(topic.value));
        
        topic.value = '';
    }

    removeTopic(i: number) {
        this.topics.removeAt(i);
    }



}