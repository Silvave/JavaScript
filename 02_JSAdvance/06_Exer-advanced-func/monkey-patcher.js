
function solution(action) {
    let postData = this;

    let monkeyPatcher = (function() {
        function score() {
            let allVotes = postData.upvotes + postData.downvotes;
            postData.score = postData.upvotes - postData.downvotes;

            let up = postData.upvotes;
            let down = postData.downvotes;
            if (allVotes > 50) {
                let numToAdd = postData.upvotes > postData.downvotes ?
                    Math.ceil(postData.upvotes*0.25) : Math.ceil(postData.downvotes*0.25);

                up += numToAdd;
                down += numToAdd;
            }

            if (allVotes < 10) {
                postData.rating = "new";
            } else if (postData.upvotes / allVotes > 0.66) {
                postData.rating = "hot";
            } else if (postData.score < 0) {
                postData.rating = "unpopular";
            } else if (postData.upvotes > 100 ||  postData.downvotes > 100) {
                postData.rating = "controversial";
            } else {
                postData.rating = "new";
            }

            return [ up, down, postData.score, postData.rating ]
        }

        return (action) => {
            if (action == "score"){
                return score()
            } else {
                postData[action+"s"]++;
            }
        }
    })();

    return monkeyPatcher(action)
}

let obj = { id: 1, author: `Pesho`, content: `Bla-bla`, upvotes: 100, downvotes: 100 };

solution.call(obj, `upvote`);
solution.call(obj, `downvote`);
console.log(solution.call(obj, `score`));
// console.log(solution.call(obj, `score`));
for (let i=0; i < 50; i++) {
    solution.call(obj, `downvote`);
}
console.log(solution.call(obj, `score`));