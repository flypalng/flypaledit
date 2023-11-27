using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlyPal.Models;

namespace FlyPal.Repositories.Interfaces
{
    public interface IUserRepository
    {
        public Task<(bool Succeeded, string ErrorMessage, User CreatedUser)> CreateUser(User newUser);

        public Task<(bool Succeeded,string ErrorMessage, User LoggedInUser)> Authenticate(User userToLogin);
        public Task<(bool Succeeded, IQueryable<User> Users)> ListUsers();
        Task<(bool Suceeded, string ErrorMessage)> DeleteUser(User user);
        User LoggedInUser();
        int UsersCount();
        int NewUsersCount();
    }
}
