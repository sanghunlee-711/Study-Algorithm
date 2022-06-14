/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/*
0. 누가봐도 bfs를 요구하는 문제임
1. 0이 아닌 값을 Infinity로 만들어 새로운 매트릭스를 만들것임
    이때 0을 가진 포지션은 queue에 미리 등록해놓고 bfs에 활용할 것임
2. 상하좌우(pos)를 만들어서 bfs를 돌면서 범위밖으로 벗어나지 않는 경우
    row, col이 -1보다 크고(0이상) 각 row, col이 matrix의 범위 밖으로 벗어나면 안되며
    거리가 현재 matrix의 row,col보다 작으면 업데이트를 해주고 아니면 패스
    newMatrix의 Row, col을 업데이트 해줄 것임.
    한번의 큐 회문이 끝날 때 마다 거리를 올려줄 것임
3. 그리고 새로운 매트릭스를 반환
*/

var updateMatrix = function(mat) {
    let queue = [];
    let newMat = new Array(mat.length);
    let distance = 1;
    const position = [[1,0],[0,1],[-1,0],[0,-1]];
    
    //1. 새로운 매트릭스 생성 및 queue에 0이 들어간 포지션을 저장
    for(let row = 0; row < mat.length; row++){
        newMat[row] = new Array(mat[row].length);
        for(let col = 0; col < mat[row].length; col++) {
            if(mat[row][col] === 0) {
                queue.push([row, col]);
                newMat[row][col] = 0;
            }else{
                newMat[row][col] = Infinity;
            }
        }
    }
    
    
    //2. bfs를 돌림
    while(queue.length !== 0) {
        let len = queue.length;
        
        for(let i = 0; i < len; i++) {
            //0을 가진 포지션들 가져오는 과정
            const [row, col] = queue.shift();
            //각 포지션마다 유효성 체크 및 업데이트 
            for(let [x, y] of position) {
                //각 포지션마다 값을 확인해보기 위해 업데이트
                x = x + row;
                y = y + col;
                if(x > -1 
                   && y > -1 
                   && x < newMat.length
                   && y < newMat[x].length
                   && distance < newMat[x][y]){
                    //해당 위치의 거리를 업데이트 해줌
                    newMat[x][y] = distance;
                    //방문한 위치에서 사방을 보기 위해 다시 큐에 넣어 줌
                    queue.push([x, y])
                }
            }
        }
        distance++;
    }
    
    return newMat;
};