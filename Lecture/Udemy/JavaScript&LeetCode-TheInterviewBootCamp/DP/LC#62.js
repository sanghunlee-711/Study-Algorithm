/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * N and M 은 m,n => 매트릭스 차원
 * T.C: O(N*M)
 * S.C: O(N*M)
 */
/*
어차피 아래랑 오른쪽으로 한칸씩 밖에 못감.
위치별로 접근가능한 거리를 dp 매트릭스를 만들어서 다 저장하고 마지막 도착 좌표에서 합계를 반환해주면 됨.
*/
 var uniquePaths = function(m, n) {
    const dpMatrix = [];

    for(let row = 1; row <= n; row++) {
      dpMatrix.push([]);
    };
    //fill out first row of dp matrix
    for(let row = 0; row < n; row++) {
      dpMatrix[row][0] = 1;
    };

    //fill out first col of dp matrix
    for(let col = 0; col < m; col++) {
      dpMatrix[0][col] = 1;
    };

    for(let row = 1; row < n; row++) {
      for(let col = 1; col < m; col++) {
        dpMatrix[row][col] = dpMatrix[row][col-1] + dpMatrix[row-1][col]
      }
    }
    return dpMatrix[dpMatrix.length-1][m - 1];
};