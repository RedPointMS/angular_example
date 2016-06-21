 $scope.clickSignIn = function () {
        if (authenticated == true) {
            //need to logout here
            //$window.location.href = config.SERVER_LOCATION + '/logout';
            window.location.href = config.SERVER_LOCATION + "/logout";
            return;


            uID = '';
            subscriber = false;
            //clearInterval(timeupdater);

            $.ajax({
                //crossDomain: true,
                url: config.SERVER_LOCATION + '/logout',
                data: {},
                type: 'POST',
                async: true,
                dataType: 'json',
                success: function (data) {
                    //add data to array
                    DATA = [];

                    uID = "";
                    subscriber = false;
                    userName = "Stranger";
                    firstName = "";

                    $scope.signInPrompt = "Sign In with Google";
                    $scope.uName = userName;

                },
                error: function (xhr, txtStatus, thrownError) {
                    throw thrownError;
                    if (xhr.status != 0) {
                        throw thrownError;

                    };
                }
            });

            //                $('#signIn').attr("href", config.SERVER_LOCATION + "/logout");

            //$location.path('/logout');

        } else {
            //$('#signIn').attr("href", config.SERVER_LOCATION + "/auth/youtube");
            //$location.path(config.SERVER_LOCATION + "/auth/youtube");
            window.location.href = config.SERVER_LOCATION + "/auth/youtube";
        }

    }