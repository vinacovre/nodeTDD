const assert = require('assert');
const AuthController = require('../../controllers/auth');

describe('AuthConroller', () => {
    var authController;
    before(() => {
        authController = new AuthController();
    });

    describe('isAuthorized', () => {
        it('should return false if not authorized', () => {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        });
        it('should return true if authorized', () => {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });
    });

    describe('isAuthorizedAsync', () => {
        it('should return false if not authorized', function(done) {
            this.timeout(2500);
            authController.isAuthorizedAsync(['user'], 'admin', (isAuth) => {
                assert.equal(false, isAuth);
                done();
            });
        });
    });
});