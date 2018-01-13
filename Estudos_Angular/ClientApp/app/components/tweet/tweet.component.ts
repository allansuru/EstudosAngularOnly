import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tweet-like',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetLikeComponent implements OnInit {

    @Input('isLiked') isSelected: boolean;
    @Input('likesCount') likeCount: number;

    constructor() { }

    ngOnInit() {
        console.log('isLike', this.isSelected)
    }
    onClick() {
        this.isSelected = !this.isSelected;
        if (this.isSelected)
            this.likeCount++;
        else
            this.likeCount--;
    }


}
